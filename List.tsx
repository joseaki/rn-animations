/* eslint-disable react/jsx-fragments */
import React, { useRef } from 'react';
// @ts-ignore
import { useSprings, animated } from 'react-spring/native';
import { View, Text, PanResponder } from 'react-native';
// @ts-ignore
import clamp from 'lodash-es/clamp';
// @ts-ignore
import swap from 'lodash-move';
import styles from "./List.styles";

const AnimatedView:any = animated(View);

const updateValues:any = (order:any, originalIndex?:any, currentIndex?:any, y?:any) => (index:any) => {
  return index === originalIndex
  ? { y: currentIndex * 100 + y, scale: 1.1, elevation: 6, immediate: (n:any) => n === 'y' }
  : { y: order.indexOf(index) * 100, scale: 1, elevation: 2, immediate: false }
}

const Item: React.FC<any> =({ items }:any) =>{
  const pan = useRef({newOrder: []}).current;
  const order = useRef(items.map((_:any, index:number) => index))
  const [springs, setSprings] = useSprings<any>(items.length, updateValues(order.current))

  const responders = items.map((value:any, originalIndex:number)=>PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const y = gestureState.dy
      const currentIndex = order.current.indexOf(originalIndex);
      const destinationRow = clamp(Math.round((currentIndex *100 + y)/100), 0, items.length -1)
      const newOrder = swap(order.current, currentIndex, destinationRow);
      setSprings(updateValues(newOrder, originalIndex, currentIndex, y));
      pan.newOrder = newOrder;
    },
    onPanResponderEnd: () => {
      order.current = pan.newOrder;
      setSprings(updateValues(pan.newOrder));
    }
  }))

  const panResponders = useRef(responders).current

  return (
    <View style={styles.container}>
      {springs.map(({ elevation, y, scale }:any, i:number) => {
        return <AnimatedView
          key={i}
          style={[
            styles.box,
            styles[`background${i+1}`],
            {
              shadowOffset: elevation.interpolate((e:any) => ({
                width: 0,
                height: e,
              })),
              elevation: elevation.interpolate((e:any) => (e*2)),
              transform: [
                {translateY: y},
                {scale: scale},
              ]
            }]}
          {...panResponders[i].panHandlers}
          children={<Text style={styles.text}>{items[i]}</Text>}
        />
      })}
    </View>
  );
}
export default Item;
