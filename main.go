package main

import (
	"fmt"
	"log"
	"os"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
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

	MONGO_URI := os.Getenv("MONGO_URI")

	clientOptions := options.Client().ApplyURI(MONGO_URI)
}
