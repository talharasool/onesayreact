
import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, Image, Platform, StatusBar as sb, FlatList, TextInput, useColorScheme ,TouchableOpacity} from 'react-native'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import i18n from '../i18n'
import { lightStyles } from '../styling/themeselctor'
import { darkStyles } from '../styling/themeselctor'
import { cardDark } from '../styling/themeselctor'
import { cardLight } from '../styling/themeselctor'

import DetailsScreen from './DetailsScreen'
const API_KEY = '92da371712034b24b992184403add809'
const API_URL = `https://newsapi.org/v2/everything?q=news&apiKey=${API_KEY}`

export default function MainScreen({ navigation }) {
const { t } = useTranslation()
const { isLoading, isError, data: news, error } = useQuery(['news'], fetchNews)
const [search, setSearch] = useState('')
const [isRefreshing, setIsRefreshing] = useState(false)
const queryClient = useQueryClient()

const colorScheme = useColorScheme()
const styles = colorScheme === 'dark' ? darkStyles : lightStyles

const renderNewsCard = ({ item }) => (
<NewsCard
url={item.url}
title={item.title}
imgUrl={item.urlToImage}
description = {item.description}
publishedAt = {item.publishedAt}
navTo={() => navigation.navigate('Details', { url: item.url })} />

);

const filteredNews = (news) => {
return news.filter(n => n.title.toLowerCase().indexOf(search.toLowerCase()) > -1)
}

return (
<SafeAreaView style={[styles.container, (isLoading || isError || news.length === 0) ? styles.middle : {}]}>
<TextInput
          placeholder={t('search')} clearButtonMode='always'
          style={styles.search}
          value={search}
          onChangeText={(text) => setSearch(text)} placeholderTextColor={colorScheme === 'dark' ? 'white' : 'black'} />
{
  isLoading && <Text style={styles.color}>{t('fetching')}</Text>
}

{
  isError && <Text style={styles.color}>{t('failed_fetch')}</Text>
}

{news && (
  news.length === 0 ?
    <Text style={styles.color}>No news!</Text>
    : (
      <>
        <FlatList
          contentContainerStyle={styles.listContainer}
          style={styles.list}
          data={filteredNews(news)}
          renderItem={renderNewsCard}
          keyExtractor={n => n.url}
          refreshing={isRefreshing}
          onRefresh={() => { queryClient.invalidateQueries(['news']) }} 
          />
      </>
    )
)}
<StatusBar style='auto' />
</SafeAreaView>
);
}

function NewsCard({ title, imgUrl,description,publishedAt ,navTo }) {
const colorScheme = useColorScheme()
const cardStyles = colorScheme === 'dark' ? cardDark : cardLight

return (

<View style={cardStyles.newCardView}>
<TouchableOpacity style={cardStyles.newCardView}  onPress={navTo}>

<View style={cardStyles.newCardView} >
<Image source={{ uri: imgUrl }} style={{width: '100%', height: 200}} />
</View>

<View style={{padding: 20}}>
<Text style={cardStyles.headlingColor}  >{title}</Text>


<Text style={cardStyles.subheadlingColor} numberOfLines={2}>
            {description}
        </Text>

        <Text style = {{marginTop : 10 ,     
        fontWeight: "250",
        color: "#e63946",
        fontSize: 13}}>Published Date: <Text>{moment(publishedAt).format("MMM Do YY")}</Text></Text>

        <View style={{padding: 5}}></View>


</View>
</TouchableOpacity>
</View>
)
}

async function fetchNews() {
const locale = i18n.language
const response = await fetch(`${API_URL}&language=${locale}`)

if (!response.ok) {
throw new Error('Network response was not ok')
}
return (await response.json()).articles
}

