package main

import (
	"fmt"
	"log"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
)

// "os"

type Todo struct {
	ID        int    `json:"id" bson:"_id`
	Completed bool   `json:"completed"`
	Body      string `json:"body"`
}

var collection *mongo.Collection

func main() {

	fmt.Print("hello from port")

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error Laoding .env file:", err)
	}
}
