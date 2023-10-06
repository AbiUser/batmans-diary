DROP TABLE IF EXISTS entry;


-- Create the table
CREATE TABLE entry (
    ENTRY_ID INT GENERATED ALWAYS AS IDENTITY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category VARCHAR(25),
    text VARCHAR(750),
    PRIMARY KEY (ENTRY_ID)
);




INSERT INTO entry (category, text)
VALUES
('Alfred', 'Alfred did not make my tea in time and so I beat up some random criminals to take the edge off. Should have left him in that burning house.'),
('The Office', '3 bats were fighting so I kicked them out until they sorted out whatever was going on. Could not  concentrate on my bat things.');
