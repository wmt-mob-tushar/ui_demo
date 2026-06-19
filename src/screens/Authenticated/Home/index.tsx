import { useCallback, useState } from 'react';
import { FlatList, ScrollView, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MenuView } from '@expo/ui/community/menu';
import { Ionicons as Icon } from '@expo/vector-icons';
import { Chip, LearnCard, Screen, Text, CircularProgress } from '@/component';
import { changeLanguage, languages } from '@/i18n';
import { useAppDispatch, useAppSelector } from '@/reduxToolkit/hooks';
import { setLanguage } from '@/reduxToolkit/rootSlice';
import { learnCards, learnFilters, LearnCard as LearnCardData, LearnFilter } from '@/data/learn';
import { assets, colors } from '@/theme';
import { styles } from './styles';

type LangCode = (typeof languages)[number]['code'];
const FLAGS: Record<string, string> = { en: '🇬🇧', es: '🇪🇸' };

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(state => state.app);
  const langLabel = languages.find(l => l.code === language)?.label ?? 'English';

  const switchLang = (code: LangCode) => {
    changeLanguage(code);
    dispatch(setLanguage(code));
  };

  const [activeFilter, setActiveFilter] = useState('all');
  const filteredCards =
    activeFilter === 'all' ? learnCards : learnCards.filter(c => c.category === activeFilter);

  const renderChip = useCallback(
    (item: LearnFilter) => (
      <Chip
        key={item.key}
        label={item.label}
        count={item.count}
        icon={item.icon || undefined}
        active={item.key === activeFilter}
        onPress={() => setActiveFilter(item.key)}
      />
    ),
    [activeFilter],
  );

  const renderLearnCard = useCallback(
    ({ item, index }: { item: LearnCardData; index: number }) => (
      <LearnCard
        card={item}
        last={index === filteredCards.length - 1}
        onStart={() => navigation.navigate('Lesson')}
      />
    ),
    [navigation, filteredCards.length],
  );

  return (
    <Screen scroll contentContainerStyle={styles.screenContent}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={assets.Avatar} style={styles.avatar} />
          <View style={styles.greetCol}>
            <Text text="Hello Max 👋" numberOfLines={1} style={styles.hello} />
            <Text tx="homeScreen:greeting" numberOfLines={1} style={styles.greeting} />
          </View>
        </View>

        <View style={styles.headerRight}>
          <MenuView
            onPressAction={({ nativeEvent }) => switchLang(nativeEvent.event as LangCode)}
            actions={languages.map(l => ({ id: l.code, title: l.label }))}>
            <Pressable style={styles.langPill}>
              <View style={styles.langFlagWrap}>
                <Text text={FLAGS[language] ?? '🌐'} style={styles.langFlag} />
              </View>
              <Text text={langLabel} style={styles.langText} />
              <Icon name="chevron-down" size={13} color={colors.primary} />
            </Pressable>
          </MenuView>

          <Pressable style={styles.bellBtn} hitSlop={6}>
            <Icon name="notifications-outline" size={20} color={colors.primary} />
            <View style={styles.bellDot} />
          </Pressable>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.decoClip} pointerEvents="none">
          <View style={styles.deco}>
            <assets.BackgroundVector width="100%" height="100%" color="#FFFFFF69" />
          </View>
        </View>

        <View style={styles.banner}>
          <assets.RobotSvg width={44} height={44} />
          <View style={styles.bannerText}>
            <Text tx="lessonsScreen:aiBuddyLabel" style={styles.buddyLabel} />
            <Text tx="lessonsScreen:aiBuddyMessage" style={styles.buddyMessage} />
          </View>
        </View>

        <assets.HomeIllustrate width={77.46} height={106.15} style={styles.illustration} pointerEvents="none" />
        <Image source={assets.Bulb} style={styles.bulb} resizeMode="contain" />

        <View style={styles.pick}>
          <View style={styles.pickLeft}>
            <Text tx="homeCard:todaysPick" style={styles.pickTitle} />
            <View style={styles.pickMeta}>
              <Icon name="book-outline" size={12} color={colors.primary50} />
              <Text text="12 lessons" style={styles.metaText} />
              <Text text="·" style={styles.metaDot} />
              <Icon name="time-outline" size={12} color={colors.primary50} />
              <Text text="10 min" style={styles.metaText} />
            </View>
          </View>

          <View style={styles.pickRight}>
            <View style={styles.completeRow}>
              <Text text="20%" style={styles.completeNum} />
              <Text tx="homeCard:complete" style={styles.completeLabel} />
            </View>
            <View style={styles.playBtn}>
              <CircularProgress
                size={48}
                strokeWidth={3}
                progress={20}
                color={colors.primary}
                backgroundColor={colors.primary12}
                showText={false}
              />
              <Icon name="play" size={16} color={colors.primary} style={styles.playIcon} />
            </View>
          </View>
        </View>
      </View>

      <Text tx="learnSection:title" style={styles.learnTitle} />

      <View>
        <FlatList
          horizontal
          data={learnFilters}
          keyExtractor={f => f.key}
          showsHorizontalScrollIndicator={false}
          style={styles.chipsContainer}
          contentContainerStyle={styles.chipsContent}
          renderItem={({ item }) => renderChip(item)}
        />
      </View>
      <FlatList
        horizontal
        data={filteredCards}
        keyExtractor={c => c.key}
        showsHorizontalScrollIndicator={false}
        style={styles.bleedList}
        contentContainerStyle={styles.cardsContent}
        renderItem={renderLearnCard}
      />
    </Screen>
  );
};

export default Home;