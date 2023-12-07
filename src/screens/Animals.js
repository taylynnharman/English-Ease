import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableHighlight,
} from "react-native";
import FlashcardScreen from "./Flash_Cards";


const animal_contanier = [
   
    // Add more flashcards here
	{
        question:
            "https://media.istockphoto.com/id/115962508/photo/zebra.webp?b=1&s=170667a&w=0&k=20&c=SKz_AoanGjCdZg1r-zBS8QZrpz-AxYK22lo5YqUSL-g=",
        answer: "zebra",
    },
	{
        question:
            "https://media.istockphoto.com/id/162718916/photo/brown-tibetan-yak.webp?b=1&s=170667a&w=0&k=20&c=MpYD3yteEnvlWERkmUuI9hTn_-xyGYgXa1pebGNe-yk=",
        answer: "Yak",
    },
	{
        question:
            "https://images.unsplash.com/photo-1550698869-9707292692a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eGVydXN8ZW58MHx8MHx8fDA%3D",
        answer: "Xerus",
    },
    {
        question:
            "https://media.istockphoto.com/id/1492207687/photo/large-male-grey-wolf-standing-in-the-forest.webp?b=1&s=170667a&w=0&k=20&c=LhFf6gPo_6t7_GOlRLfCKX2RRYcKyzzffsVb-UEfBIE=",
        answer: "Wolf",
    },
    {
        question:
            "https://media.istockphoto.com/id/1072044806/photo/griffon-vulture.webp?b=1&s=170667a&w=0&k=20&c=Ep-ceXc4IOrwZZgaBQMmP6-ODk5uRvn8G0_kj9mm9us=",
        answer: "Vulture",
    },
    {
        question:
            "https://media.istockphoto.com/id/1406579840/photo/long-wattled-umbrellabird-cephalopterus-penduliger-cotingidae-spanish-names-include-pajaro.webp?b=1&s=170667a&w=0&k=20&c=2Yr3OQN1UyeVi_TIrALC1yErceK6o0DvsRG_pYoDD6o=",
        answer: "Umbrellabird",
    },
    {
        question:
            "https://media.istockphoto.com/id/949472768/photo/tiger-portrait.webp?b=1&s=170667a&w=0&k=20&c=XWHJg8dB5Av4TqDlk2d9BQyDA1xONefHx9VBAvhHoO4=",
        answer: "Tiger",
    },
    {
        question:
            "https://media.istockphoto.com/id/1466759447/photo/yellow-pit-viper-in-the-family-viperidae-angry-snake.webp?b=1&s=170667a&w=0&k=20&c=oMhcaTXVYmjwD5Fr-V9dVI3XPSvArK3JaqnEYTKWa6o=",
        answer: "Snake",
    },
    {
        question:
            "https://media.istockphoto.com/id/173893247/photo/rabbit.webp?b=1&s=170667a&w=0&k=20&c=d0NzczDPQiF78yXSf4ihpJCq5GW6UVV-u44fMMuHyjQ=",
        answer: "Rabbit",
    },
    {
        question:
            "https://media.istockphoto.com/id/153806634/photo/quail-bobwhite-flying.webp?b=1&s=170667a&w=0&k=20&c=qr7LiAkqlW2y6rMzhxmPn1L7qK0qIdJj1QJRHpfD7fA=",
        answer: "Quail",
    },
    {
        question:
            "https://media.istockphoto.com/id/1449200559/photo/peacock.webp?b=1&s=170667a&w=0&k=20&c=kwTbN2DTAnEe82jHwfG-HDArSCfm_NND2CrCXeB71oM=",
        answer: "Peacock",
    },
    {
        question:
            "https://media.istockphoto.com/id/1472451235/photo/the-barn-owl-in-the-spring-snowflake.webp?b=1&s=170667a&w=0&k=20&c=ivfUT-S2yljuMi56YJj46XR7L0H8Uiy2uKskAznInUw=",
        answer: "Owl",
    },
    {
        question:
            "https://media.istockphoto.com/id/1302086937/photo/flame.webp?b=1&s=170667a&w=0&k=20&c=WVcppyJBD4KVRs4tyGc7c2nZLsZLkoxnBVurVyRy3DQ=",
        answer: "Nyala",
    },
    {
        question:
            "https://media.istockphoto.com/id/1449392129/photo/wild-pig-tailed-macaque-the-tropical-paradise-of-da-nang-vietnam-in-southeast-asia.webp?b=1&s=170667a&w=0&k=20&c=eMkdizJDTmFOaF_XriXdIzjw24jwj4IevP47E8HkuNE=",
        answer: "Monkey",
    },
    {
        question:
            "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        answer: "Lion",
    },
    {
        question:
            "https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGlvbnxlbnwwfHwwfHx8MA%3D%3D",
        answer: "Kangaroo",
    },
    {
        question:
            "https://media.istockphoto.com/id/1396575803/photo/jellyfish-floating-in-water.webp?b=1&s=170667a&w=0&k=20&c=sZ7cKXqy_lAszzY3Y9iI_hqTzB5JqwN6endxhao8OPE=",
        answer: "Jellyfish",
    },
    {
        question:
            "https://media.istockphoto.com/id/146059113/photo/iguana.webp?b=1&s=170667a&w=0&k=20&c=ZIlAEfQPBidH6kOq51b-RJ4szy_eM6Qmdk6HcGN9Tlg=",
        answer: "Iguana",
    },
    {
        question:
            "https://media.istockphoto.com/id/1398066425/photo/chestnut-horse-run-in-sunlight.webp?b=1&s=170667a&w=0&k=20&c=ne6wmrULnGHtsO3SzPm_wOXY-Fis-XgO5FmQ_Qhl_Vk=",
        answer: "Horse",
    },
    {
        question:
            "https://media.istockphoto.com/id/1424956137/photo/giraffe-and-calf-on-the-serengeti-planes.webp?b=1&s=170667a&w=0&k=20&c=JWRlVhIkh3zOo3hcmak2e7R-rarPHXAFEHSTSjSOq3o=",
        answer: "Giraffe",
    },
    {
        question:
            "https://media.istockphoto.com/id/1373362766/photo/orange-flamingo-bird-against-green-backround.webp?b=1&s=170667a&w=0&k=20&c=ZjXBqSpiOl_Fw78vDft8OCZ1TFBIok43uiyHl4kr54g=",
        answer: "Flamingo",
    },
    {
        question:
            "https://images.unsplash.com/photo-1619111712102-8273abfea0aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEVsZXBoYW50fGVufDB8fDB8fHww",
        answer: "Elephant",
    },
    {
        question:
            "https://media.istockphoto.com/id/1477651586/photo/portrait-of-a-dog-outside.webp?b=1&s=170667a&w=0&k=20&c=h9KFKkqMkxS0Ifx-LuLhOT2ZMU3vuVrnza4LVdww5Bs=",
        answer: "Dog",
    },
    {
        question:
            "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hlZXRhaHxlbnwwfHwwfHx8MA%3D%3D",
        answer: "Cheetah",
    },
    {
        question:
            "https://media.istockphoto.com/id/1482805330/photo/bear-fishing-in-a-flowing-river.webp?b=1&s=170667a&w=0&k=20&c=IMiBwyayNN7LAEfbTG-rmc94vzdDQoNpaacwLmeiDXY=",
        answer: "Bear",
    },
    {
        question:
            "https://media.istockphoto.com/id/1401261120/photo/a-male-impala-on-an-overcast-morning-on-the-grasslands-of-central-kruger.webp?b=1&s=170667a&w=0&k=20&c=4L3N-_72S4DSSBEqZK-381u0fuvBddnSn1bBW2nrNZQ=",
        answer: "Antelope",
    },
  ];

    







  

const Animals = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<FlashcardScreen dictonary={animal_contanier} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	alphabetContainer: {
		flexDirection: "column",
		alignItems: "center",
	},
	letter: {
		fontSize: 24,
		margin: 5,
	},
	selectedLetter: {
		fontSize: 24,
		margin: 5,
		backgroundColor: "lightblue",
		borderRadius: 5,
	},
});

export default Animals;
