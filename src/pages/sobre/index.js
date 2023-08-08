import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from "./styles.js"
import Perfil from "../../components/contato/index.js"

export function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Conheça um pouco da Sil</Text>
        <Text style={styles.subHeaderText}>A melhor em design e beleza</Text>
      </View>

      <Perfil/>

      <Text style={styles.description}>
      Sil Fazendo Arte representa a força e dedicação de uma mulher forte, que entrega designs e beleza para seus clientes, sem esquecer de seus valores como o comprometimento, sustentabilidade, responsabilidade social e a satisfação de seus clientes. Com suas mãos nascem criações que ajudam a contar a história de uma designer em busca de experimentações e novos significados para seu trabalho. 
      </Text>

    </View>
  );
}