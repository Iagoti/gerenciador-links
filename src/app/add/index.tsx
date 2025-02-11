import { View, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { useState } from "react";

export default function add(){

    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");

    function handleAdd(){
        if(!category){
            return Alert.alert("Categoria","Selecione uma categoria");
        }

        if(!name.trim()){
            return Alert.alert("Nome", "Informe o nome do item");
        }

        if(!url.trim()){
            return Alert.alert("URL", "Informe a url");
        }
        console.log({category, name, url});
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>
                <Text style={styles.title}>Novo</Text>
            </View>

            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories onChange={setCategory} selected={category} ></Categories>

            <View style={styles.form}>
                <Input placeholder="Nome" onChangeText={setName} />
                <Input placeholder="Url " onChangeText={setUrl} />
                <Button title="Adicionar" onPress={handleAdd} />
            </View>
        </View>
    )
}