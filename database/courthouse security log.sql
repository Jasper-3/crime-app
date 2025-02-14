SELECT *
FROM
    courthouse_security_logs ch 
	LEFT JOIN people pp on ch.license_plate = pp.license_plate 
	LEFT JOIN atm_transactions at on ch.id = at.id 
	LEFT JOIN bank_accounts ba on at.account_number = ba.account_number
	LEFT JOIN passengers ps on pp.passport_number = ps.passport_number
	LEFT JOIN phone_calls pc on pc.caller = pp.phone_number
WHERE
    ch.year = 2020 AND
    ch.month = 7 AND
	ch.day = 28 AND
	ch.hour = 10  AND
	ch.activity = 'exit' AND
  
	at.atm_location = 'Fifer Street' AND
	at.transaction_type = 'withdraw' AND 
	
	ps.flight_id = 36 AND
	pc.duration <=60;