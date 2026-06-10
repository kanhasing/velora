import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import OpenAI from "openai"

dotenv.config({
  path: "./server/.env",
})

const app = express()

app.use(cors())
app.use(express.json())

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

app.post("/generate", async (req, res) => {

  try {

    const { prompt } = req.body

    const response =
      await openai.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",

            content:
              "You are an AI website generator.",
          },

          {
            role: "user",
            content: prompt,
          },

        ],

      })

    res.json({

      success: true,

      result:
        response.choices[0].message.content,

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      success: false,

      message: "AI generation failed",

    })

  }

})

app.listen(5000, () => {

  console.log(
    "Server running on port 5000"
  )

})