import React, {
  FC, useCallback, useState, useImperativeHandle, forwardRef, useRef, useEffect
} from 'react';
import { BottomDialogStyles as styles, verticalScale } from '@todo/styles';
import { View, Text, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import { BottomDialogProps } from '@todo/interfaces'
import Strings from '@todo/strings'

const BottomDialog: FC<BottomDialogProps> = forwardRef((props, ref) => {
  const { onAdd } = props
  const translateY = useRef(new Animated.Value(verticalScale(640))).current
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onOpen = useCallback(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 800,
      useNativeDriver: false,
      easing: Easing.cubic,
    }).start()
  }, []);
  const onClose = useCallback(() => {
    Animated.timing(translateY, {
      toValue: verticalScale(640),
      duration: 800,
      useNativeDriver: false,
      easing: Easing.cubic,
    }).start(() => {
      setShow(false);
    })
  }, []);
  const onClickAdd = useCallback(() => {
    onAdd({ title, content });
    onClose();
  }, [title, content]);
  useImperativeHandle(ref, () => ({
    show: () => {
      setShow(true);
      onOpen();
    },
  }));
  if (!show) {
    return <></>;
  }
  return (
    <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.loading}>
      <Animated.View style={[styles.bottom, { transform: [{ translateY }] }]}>
        <View style={styles.label}>
          <Text style={styles.labelText}>{Strings.TODO_DIALOG_ADD}</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            placeholder={Strings.TODO_DIALOG_TITLE_PLACEHOLDER}
            multiline={false}
            value={title}
            onChangeText={(title: string) => setTitle(title)}
            style={styles.titleText} />
          <TextInput
            textAlignVertical="center"
            placeholder={Strings.TODO_DIALOG_CONTENT_PLACEHOLDER}
            multiline={true}
            value={content}
            onChangeText={(content: string) => setContent(content)}
            style={styles.contentText}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={onClickAdd}>
            <Text style={styles.buttonText}>{Strings.TODO_ADD_INBOX_SAVE_BUTTON}</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </TouchableOpacity>);
});

export default BottomDialog;

