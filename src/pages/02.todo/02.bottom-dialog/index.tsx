import React, {
  FC, useCallback, useState, useImperativeHandle, forwardRef, useRef, useMemo,
} from 'react';
import { BottomDialogStyles as styles, verticalScale } from '@todo/styles';
import { View, Text, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import { BottomDialogProps, TodoListItemProps } from '@todo/interfaces'
import Strings from '@todo/strings'

const BottomDialog: FC<BottomDialogProps> = forwardRef((props, ref) => {
  const { onAdd, onUpdate, onDelete } = props
  const translateY = useRef(new Animated.Value(verticalScale(320))).current
  const [show, setShow] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [itemIndex, setItemIndex] = useState(-1);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const onOpen = useCallback(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
      easing: Easing.cubic,
    }).start()
  }, []);
  const onClose = useCallback(() => {
    Animated.timing(translateY, {
      toValue: verticalScale(320),
      duration: 400,
      useNativeDriver: false,
      easing: Easing.cubic,
    }).start(() => {
      setUpdate(false);
      setTitle('');
      setContent('');
      setItemIndex(-1);
      setShow(false);
    })
  }, []);
  const onClickAdd = () => {
    onAdd({ title, content });
    onClose();
  };
  const onClickUpdate = () => {
    onUpdate({ title, content, index: itemIndex });
    onClose();
  };
  const onClickDelete = () => {
    onDelete(itemIndex);
    onClose();
  };
  useImperativeHandle(ref, () => ({
    showAdd: () => {
      setUpdate(false);
      setShow(true);
      onOpen();
    },
    showUpdate: (item: TodoListItemProps, index: number) => {
      setUpdate(true);
      setTitle(item.title);
      setContent(item.content);
      setItemIndex(index);
      setShow(true);
      onOpen();
    }
  }));
  const desc = useMemo(() =>
    isUpdate ? Strings.TODO_DIALOG_UPDATE : Strings.TODO_DIALOG_ADD,
    [isUpdate]);
  if (!show) {
    return <></>;
  }
  return (
    <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.loading}>
      <Animated.View style={[styles.bottom, { transform: [{ translateY }] }]}>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.label}>
            <Text style={styles.labelText}>{desc}</Text>
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
            {
              isUpdate ?
                <>
                  <TouchableOpacity
                    style={[styles.buttonMini, styles.deleteButton]}
                    onPress={onClickDelete}>
                    <Text style={styles.buttonText}>{Strings.TODO_ADD_INBOX_DELETE_BUTTON}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonMini}
                    onPress={onClickUpdate}>
                    <Text style={styles.buttonText}>{Strings.TODO_ADD_INBOX_SAVE_BUTTON}</Text>
                  </TouchableOpacity>
                </> :
                <TouchableOpacity
                  style={styles.button}
                  onPress={onClickAdd}>
                  <Text style={styles.buttonText}>{Strings.TODO_ADD_INBOX_SAVE_BUTTON}</Text>
                </TouchableOpacity>
            }
          </View>
        </TouchableOpacity>
      </Animated.View>
    </TouchableOpacity>);
});

export default BottomDialog;

