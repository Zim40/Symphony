import fetch from "node-fetch";

const token = "p7HZtwDTv9VBPkwJN4CFnTTAehKOpFD0TedgdqDs";

const newsApi = {
    async fetchNews(req, res) {
        try {
            const response = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${process.env.API_TOKEN}&locale=us`
            );
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`)
            };
            const data = await response.json();
            res.status(200).json({ data: data, message: "Fetch Successful" })
        } catch (error) {
            res
                .status(500)
                .json({ error: error.message, message: "Internal Server Error" });

        }
    }
};

export default newsApi;