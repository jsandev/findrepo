import {View} from 'react-native';
import {useLinkBuilder} from '@react-navigation/native';
import {Text, PlatformPressable} from '@react-navigation/elements';

export const MyTabBar = ({state, descriptors, navigation}: any) => {
  const {buildHref} = useLinkBuilder();

  return (
    <View className="w-full bg-primary h-[78px] flex-row">
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={route.name}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="bg-white flex-1 justify-center items-center">
            <Text>{label}</Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
};
