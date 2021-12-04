import React, { FC, useCallback, useState, useMemo, useEffect, createRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux'
import { LoginStyles as styles, Images } from '@todo/styles';
import { LoginProps } from '@todo/interfaces';
import { validateEmail } from '@todo/util';
import { actions } from '@todo/redux';
import Strings from '@todo/strings';

const allowAccount: [{ [name: string]: string }] = [
  { email: 'test@test.com', password: '1234' }
]

const checkAccount = (email: string, password: string): boolean => {
  const accountIndex: number = allowAccount.findIndex(x => x.email === email && x.password === password);
  return accountIndex >= 0;
}

const Login: FC<LoginProps> = (props) => {
  const scrollRef = createRef<ScrollView>();
  const dipatch = useDispatch();
  const [email, setEmail] = useState(
    __DEV__ ? 'test@test.com' : 
  '');
  const [password, setPassword] = useState(
    __DEV__ ? '1234' : 
    '');
  const [errorText, setErrorText] = useState('');
  const isValidate = useMemo(() => {
    return validateEmail(email);
  }, [email]);
  const { navigation } = props;
  const onLogin = useCallback(() => {
    dipatch(actions.common.showLoader());
    if (checkAccount(email, password)) {
      dipatch(actions.auth.setUserId(email));      
      setEmail('');
      setPassword('');
      navigation.navigate('todo');
    } else {
      setErrorText(Strings.LOGIN_ERROR);
    }    
    dipatch(actions.common.hideLoader());
  }, [email, password]);

  const onFocusTextInput = () => {
    if(scrollRef.current) {
      scrollRef.current.scrollToEnd();
    }
    // scrollRef.current?.scrollToEnd();    
  };
  const buttonDisabled = useMemo(() => {
    return !(email.length > 0 && password.length > 0 && isValidate);
  }, [email, password, isValidate]);
  useEffect(()=> {
    setErrorText(email.length > 0 && email.includes('@') && !isValidate ? Strings.EMAIL_ERROR: '');
  }, [email, isValidate]);
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='handled'
        ref={scrollRef}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.logo}>
            <Text style={styles.logoTitle}>{Strings.LOGO_TITLE}</Text>
            {Images.logo}
          </View>
          <View style={styles.form}>
            <TextInput
              keyboardType='email-address'
              value={email}
              onChangeText={(email) => setEmail(email)}
              onFocus={onFocusTextInput}
              style={styles.textInput} />
            <View style={styles.error}>
              <Text style={styles.errorText}>{errorText}</Text>
            </View>
          </View>
          <TextInput
            secureTextEntry={true}
            value={password}
            onChangeText={(password) => setPassword(password)}
            onFocus={onFocusTextInput}
            style={styles.textInput} />
          <TouchableOpacity
            disabled={buttonDisabled}
            style={[styles.loginButton, buttonDisabled && styles.buttonDisabled]}
            onPress={onLogin}>
            <Text style={styles.loginText}>{Strings.LOGIN_BUTTON}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    </View>
  )
}

export default Login;