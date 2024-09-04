import {View, Text, Platform, StyleSheet, Image} from 'react-native';

const getTypeDetails = type => {
  switch (type.toLowerCase()) {
    case 'electric':
      return {borderColor: '#FFD700', emoji: '⚡️'};
    case 'water':
      return {borderColor: '#6493EA', emoji: '💧'};
    case 'fire':
      return {borderColor: '#FF5733', emoji: '🔥'};
    case 'grass':
      return {borderColor: '#66CC66', emoji: '🍃'};
    default:
      return {borderColor: '#A0A0A0', emoji: '❓'};
  }
};

export default function PokemonCard({
  name,
  type,
  image,
  hp,
  moves,
  weaknesses,
}) {
  const {borderColor, emoji} = getTypeDetails(type);
  return (
    <View>
      <View style= {styles.card}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.hp}>❤️{hp}</Text>
        </View>

        <Image
          source={image}
          accessibilityLabel={`${name} Pokemon`}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.typeContainer}>
          <View style={[styles.badge, {borderColor}]}>
            <Text style={styles.typeEmoji}>{emoji}</Text>
            <Text style={styles.typeText}>{type}</Text>
          </View>
        </View>

        <View style={ styles.movesContainer }>
          <Text style={ styles.movesText }>Moves: {moves.join(', ')}</Text>
        </View>

        <View style={ styles.weaknessContainer }>
          <Text style={ styles.weaknessText }>Weakness: {weaknesses.join(', ')}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 6,
      },
    }),
  },

  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },

  hp: {
    fontSize: 22,
    color: 'black',
  },

  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },

  typeContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },

  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },

  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: "black",
  },

  movesContainer: {
    marginBottom: 16,
  },

  movesText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },

  weaknessContainer: {
    marginBottom: 16,
  },

  weaknessText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
});
