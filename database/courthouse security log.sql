SELECT *
FROM
    courthouse_security_logs
WHERE
    year = 2020 AND
    month = 7 AND
	hour = 10  AND
	activity = 'exit' AND
    day = 28;