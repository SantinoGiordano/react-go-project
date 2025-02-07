package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Todo struct {
	ID        int    `json:"id"`
	Completed bool   `json:"completed"`
	Body      string `json:"body"`
}

func main() {
	fmt.Print("Hello World")
	app := fiber.New() //go get github.com/gofiber/fiber/v2

	todos := []Todo{}

	app.Get("/api/todos", func(c *fiber.Ctx) error {
		return c.Status(200).JSON(fiber.Map{
			"msg": "hello world",
		})
	})

	app.Post("api/todos", func(c *fiber.Ctx) error {
		todo := &Todo{} // this becomes a pointer with &
		if err := c.BodyParser(todo); err != nil {
			return err
		}
		if todo.Body == "" {
			return c.Status(400).JSON(fiber.Map{"error": "Todo body is required"})
		}
		todo.ID = len(todos) + 1
		todos = append(todos, *todo)

		return c.Status(201).JSON(todo)
	})
	app.Patch("/api/todo/:id", func(c *fiber.Ctx) error {
		id := c.Params("id")

		for i, todo := range todos {
			if fmt.Sprint(todo.ID) == id {

				todos[i].Completed = true

				return c.Status(200).JSON(todos[i])
			}
		}

		return c.Status(404).JSON(fiber.Map{"Error": "Todo not found!"})
	})

	app.Delete("/api/todos/:id", func(c *fiber.Ctx) error{
		id := c.Params("id")

		for i, todo := range todos {
			if fmt.Sprint(todo.ID) == id{
				todos = append(todos[:i],todos[i+1:]...)
				
			}
		}
	})

	log.Fatal(app.Listen(":4000"))
}
