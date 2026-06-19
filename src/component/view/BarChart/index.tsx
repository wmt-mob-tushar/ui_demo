import { useMemo, useState } from 'react';
import { View, Pressable, ScrollView, LayoutChangeEvent } from 'react-native';
import { UnistylesRuntime } from 'react-native-unistyles';
import { Canvas, Group, Path, RoundedRect, Skia, rect, rrect } from '@shopify/react-native-skia';
import { Text } from '@/component/ui/Text';
import { colors } from '@/theme';
import { DayBar } from '@/data/skillProgress';
import { styles } from './styles';

interface BarChartProps {
  data: DayBar[];
  activeIndex: number;
  onSelect?: (index: number) => void;
  /** Optional override; defaults to a responsive height from the screen. */
  height?: number;
}

const BAR_W = 42; // fixed bar width
const CRAMPED_SLOT = 56; // bar + gap once we switch to horizontal scrolling
const TOOLTIP_W = 34;
const TOOLTIP_H = 34; // tooltip badge size
const TOP_SPACE = 30; // padding above the tallest bar (tooltip room)
const LABEL_H = 30; // padding below for the weekday labels
const HATCH_GAP = 8;
const HATCH_STROKE = 1.6;
const LINE = colors.primary; // #1C274C

export const BarChart = ({ data, activeIndex, onSelect, height }: BarChartProps) => {
  // Responsive via the Unistyles runtime (rt) — height scales with the screen,
  // width is seeded from the screen then refined by the real layout.
  const chartHeight = height ?? Math.round(UnistylesRuntime.screen.height * 0.3);
  const [containerW, setContainerW] = useState(() => UnistylesRuntime.screen.width - 72);
  const onLayout = (e: LayoutChangeEvent) => setContainerW(e.nativeEvent.layout.width);

  const n = data.length;
  const chartBottom = chartHeight - LABEL_H;
  const chartH = chartBottom - TOP_SPACE;

  // Fill the container when bars fit; switch to wider, scrollable slots when cramped (e.g. a year).
  const naturalSlot = containerW / n;
  const cramped = naturalSlot < BAR_W + 2;
  const slot = cramped ? CRAMPED_SLOT : naturalSlot;
  const canvasW = slot * n;
  const scrollable = canvasW > containerW + 1;

  const layout = useMemo(() => {
    const barW = Math.min(BAR_W, slot - 2);
    return data.map((d, i) => {
      const barH = Math.max(barW, d.value * chartH); // never shorter than a circle
      const x = i * slot + (slot - barW) / 2;
      const y = chartBottom - barH;
      return { x, y, w: barW, h: barH, slotX: i * slot, centerX: i * slot + slot / 2 };
    });
  }, [slot, data, chartH, chartBottom]);

  // Diagonal "/" hatch path per inactive bar (clipped to its rounded shape).
  const hatches = useMemo(
    () =>
      layout.map(b => {
        const p = Skia.Path.Make();
        for (let off = -b.h; off < b.w; off += HATCH_GAP) {
          p.moveTo(b.x + off, b.y + b.h);
          p.lineTo(b.x + off + b.h, b.y);
        }
        return p;
      }),
    [layout],
  );

  const active = layout[activeIndex];

  return (
    <View style={[styles.container, { height: chartHeight }]} onLayout={onLayout}>
      <ScrollView horizontal scrollEnabled={scrollable} showsHorizontalScrollIndicator={false}>
        <View style={{ width: canvasW, height: chartHeight }}>
          <Canvas style={{ width: canvasW, height: chartHeight }}>
          {layout.map((b, i) => {
            const rr = rrect(rect(b.x, b.y, b.w, b.h), b.w / 2, b.w / 2);
            if (i === activeIndex) {
              return <RoundedRect key={i} rect={rr} color={LINE} />;
            }
            return (
              <Group key={i} clip={rr}>
                <Path path={hatches[i]} color={LINE} style="stroke" strokeWidth={HATCH_STROKE} strokeCap="round" />
              </Group>
            );
          })}
        </Canvas>

        {/* Transparent tap targets — tap a bar to highlight it. */}
        {layout.map((b, i) => (
          <Pressable
            key={i}
            onPress={() => onSelect?.(i)}
            style={[styles.tapTarget, { left: b.slotX, width: slot, height: chartBottom }]}
          />
        ))}

        {active && (
          <View
            style={[styles.tooltip, { left: active.centerX - TOOLTIP_W / 2, top: active.y - TOOLTIP_H + 12 }]}
            pointerEvents="none">
            <Text text={`+${data[activeIndex].gain}%`} style={styles.tooltipText} />
          </View>
        )}

        {/* Weekday labels */}
        {layout.map((b, i) => (
          <Text
            key={i}
            text={data[i].day}
            style={[styles.dayLabel, { left: b.slotX, width: slot, top: chartBottom + 8 }]}
          />
        ))}
        </View>
      </ScrollView>
    </View>
  );
};
