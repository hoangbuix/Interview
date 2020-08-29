package main

import (
	"back-end/db"
	"github.com/labstack/echo/v4"
	"net/http"
)

func main() {

	sql := &db.Sql{
		Host:     "localhost",
		Port:     5432,
		UserName: "postgres",
		Password: "151998",
		DbName:   "interview",
	}
	sql.Connect()
	defer sql.Close()

	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.Logger.Fatal(e.Start(":1323"))
}
