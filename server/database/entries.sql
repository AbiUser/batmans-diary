DROP TABLE IF EXISTS entry;

CREATE TABLE entry (
    ENTRY_ID INT GENERATED ALWAYS AS IDENTITY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    category VARCHAR(25),
    text VARCHAR(750),
    PRIMARY KEY (entry_id)
);

INSERT INTO entry (created_at, category, text)

VALUES
(NOW(), 'Alfred', 'Alfred did not make my tea in time and so I beat up some random criminals to take the edge off. Should have left him in that burning house.'),
(NOW(), "The Office", "3 bats were fighting so I kicked them out until they sorted out whatever was going on. Couldn't concentrate on my bat things.");
