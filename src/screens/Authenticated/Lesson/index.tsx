import { useCallback, useMemo } from 'react';
import { FlatList, View, Pressable, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { Ionicons as Icon } from '@expo/vector-icons';
import { CircularProgress, GlassView, LessonCard, StepIndicator, Text } from '@/component';
import { TxKeyPath } from '@/i18n';
import { assets, colors } from '@/theme';
import { lessonsData } from '@/data/lessons';
import { LessonStatus } from '@/utils';
import { styles } from './styles';
import { useUnistyles } from 'react-native-unistyles';

type LessonItem = (typeof lessonsData)[number];

const TOTAL = lessonsData.length;
const PROGRESS = 1.3;

const Lesson = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const {theme} = useUnistyles()
  const onBack = useCallback(() => navigation.goBack(), [navigation]);

  const renderItem = useCallback(({ item, index }: { item: LessonItem; index: number }) => {
    const fill = Math.max(0, Math.min(1, PROGRESS - index));
    const status =
      fill >= 1 ? LessonStatus.Completed : fill > 0 ? LessonStatus.Active : LessonStatus.Locked;
    const buttonTx: TxKeyPath =
      status === LessonStatus.Completed
        ? 'lessonsScreen:replay'
        : status === LessonStatus.Active
          ? 'lessonsScreen:continue'
          : 'lessonsScreen:startLesson';

    return (
      <View style={styles.row}>
        <StepIndicator index={index} total={TOTAL} value={PROGRESS} />
        <View style={styles.cardCol}>
          <LessonCard
            titleTx={item.titleKey}
            descTx={item.descKey}
            duration={item.duration}
            bg={item.bg}
            buttonTx={buttonTx}
            disabled={status !== LessonStatus.Active}
          />
        </View>
      </View>
    );
  }, []);

  const ListHeader = useMemo(
    () => (
      <View style={[styles.header, { paddingTop: insets.top + 14 }]}>
        <assets.BackgroundVector
          width={446.55}
          height={262.96}
          color={colors.white20}
          style={styles.bgArc}
          pointerEvents="none"
        />

        <View style={styles.illustration} pointerEvents="none">
          <assets.LearnPageIllustrate width={280.75} height={292} />
        </View>

        <Pressable style={styles.backBtn} hitSlop={8} onPress={onBack}>
          <Icon name="arrow-back" size={24} color={colors.primary} />
        </Pressable>

        <Text tx="lessonsScreen:title" style={styles.lettersLabel} />
        <Text tx="lessonsScreen:subtitle" style={styles.title} />

        <View style={styles.capsuleRow}>
          <View style={styles.capsule}>
            <Icon name="book-outline" size={13} color={colors.primary} style={styles.capsuleIcon} />
            <Text tx="lessonsScreen:lessons" style={styles.capsuleText} />
          </View>
          <View style={styles.capsule}>
            <Icon name="time-outline" size={13} color={colors.primary} style={styles.capsuleIcon} />
            <Text tx="lessonsScreen:duration" style={styles.capsuleText} />
          </View>
        </View>

        <GlassView style={styles.banner} borderRadius={32} intensity={43} tint={theme.colors.mint}>
          <assets.RobotSvg width={44} height={44} />
          <View style={styles.bannerTextCol}>
            <Text tx="lessonsScreen:aiBuddyLabel" style={styles.bannerSubtitle} />
            <Text tx="lessonsScreen:aiBuddyMessage" style={styles.bannerTitle} />
          </View>
          <View style={styles.ringCircle}>
            <CircularProgress
              size={48}
              strokeWidth={6}
              progress={Math.round((PROGRESS / TOTAL) * 100)}
              color={colors.progressGreen}
              backgroundColor={colors.timelineGray}
            />
          </View>
        </GlassView>
      </View>
    ),
    [insets.top, onBack],
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.mint} translucent />

      <FlatList
        data={lessonsData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={ListHeader}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews
      />

      <View style={styles.bottomFade} pointerEvents="none">
        <Svg width="100%" height="100%">
          <Defs>
            <LinearGradient id="listFade" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor={colors.background} stopOpacity={0} />
              <Stop offset="1" stopColor={colors.background} stopOpacity={1} />
            </LinearGradient>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#listFade)" />
        </Svg>
      </View>
    </View>
  );
};

export default Lesson;
