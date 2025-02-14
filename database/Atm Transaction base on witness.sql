SELECT *
FROM
    atm_transactions
WHERE
    year = 2020 AND
    month = 7 AND
	atm_location = 'Fifer Street' AND
	transaction_type ='withdraw' AND
    day = 28;