const TimestampController = {
    getTimestamp: (req, res) => {
        const { date } = req.params;
        let unix, natural;

        // Check if the date is a valid Unix timestamp
        if (!isNaN(date)) {
            unix = parseInt(date);
            natural = new Date(unix).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
        } else {
            // Check if the date is a valid natural language date
            natural = new Date(date);
            if (natural.toString() !== "Invalid Date") {
                unix = natural.getTime();
                natural = natural.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                });
            }
        }

        // If both unix and natural are undefined, return null
        if (!unix && !natural) {
            return res.json({ unix: null, natural: null });
        }

        res.json({ unix: unix || null, natural: natural || null });
    }
};

export default TimestampController;