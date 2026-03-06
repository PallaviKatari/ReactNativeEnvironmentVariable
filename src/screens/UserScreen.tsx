import React, { useEffect, useState } from "react"
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native"
import { fetchUsers, User } from "../services/apiService"

const UserScreen = () => {

  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchUsers()
      .then(data => setUsers(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  }, [])

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading Users...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>User List</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>

            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.name.charAt(0)}
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>

          </View>
        )}
      />

    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
    marginTop: 40
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15
  },

  avatarText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },

  info: {
    flex: 1
  },

  name: {
    fontSize: 18,
    fontWeight: "600"
  },

  email: {
    fontSize: 14,
    color: "#666",
    marginTop: 4
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  loadingText: {
    marginTop: 10,
    fontSize: 16
  }

}) 