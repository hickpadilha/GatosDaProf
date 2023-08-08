import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from "./styles.js"
import Produto from "../../components/produto/index.js"

export function Produtos({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Veja os produtos</Text>
        <Text style={styles.subHeaderText}>Promoções e preços incríveis</Text>
      </View>

      <ScrollView >

      <Text style={styles.titleProduto}>Jogos americanos:</Text>

      <View style={styles.row}>
        <Produto
          imageSource={require('../../../assets/produtos/JogoAmericanoSimples.jpg')} // Substitua pelo caminho correto da imagem
          name="Jogo Americano Simples"
          originalPrice="R$ 30"
          discountPercent="10"
          discountedPrice="R$ 27"
        />
          <Produto
            imageSource={require('../../../assets/produtos/JogoAmericanoVerde.jpg')} // Substitua pelo caminho correto da imagem
            name="Jogo Americano Verde"
            originalPrice="R$ 40"
            discountPercent="5"
            discountedPrice="R$ 38"
          />
      </View>

      <Text style={styles.titleProduto}>Tapetes:</Text>

      <View style={styles.row}>
        <Produto
          imageSource={require('../../../assets/produtos/TapeteCoracao.png')} // Substitua pelo caminho correto da imagem
          name="Tapete Coração"
          originalPrice="R$ 75"
          discountPercent="10"
          discountedPrice="R$ 67,5"
        />
        <Produto
          imageSource={require('../../../assets/produtos/TapeteBordado.png')} // Substitua pelo caminho correto da imagem
          name="Tapete Bordado"
          originalPrice="R$ 60"
          discountPercent="30"
          discountedPrice="R$ 42"
        />
      </View>

      <Text style={styles.titleProduto}>Pulseiras:</Text>

      <View style={styles.row}>
        <Produto
          imageSource={require('../../../assets/produtos/PulseiraAmetista.png')} // Substitua pelo caminho correto da imagem
          name="Pulseira Ametista"
          originalPrice="R$ 23"
          discountPercent="5"
          discountedPrice="R$ 21,85"
        />
        <Produto
          imageSource={require('../../../assets/produtos/PulseiraCristal.png')} // Substitua pelo caminho correto da imagem
          name="Pulseira Cristal"
          originalPrice="R$ 59"
          discountPercent="9"
          discountedPrice="R$ 53,69"
        />
      </View>

      </ScrollView>

      <Text style={styles.descriptionProdutos}>Entre em contato para mais peças e descontos exclusivos</Text>

    </View>
  );
}
