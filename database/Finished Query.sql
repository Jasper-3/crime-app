SELECT *
FROM
    courthouse_security_logs ch 
	LEFT JOIN people pp ON ch.license_plate = pp.license_plate
	LEFT JOIN bank_accounts ba ON pp.id = ba.person_id
	LEFT JOIN atm_transactions at ON ba.account_number = at.account_number
	LEFT JOIN passengers ps ON pp.passport_number = ps.passport_number
	LEFT JOIN flights fl ON ps.flight_id = fl.id
	LEFT JOIN airports ar ON fl.destination_airport_id = ar.id
	LEFT JOIN phone_calls pc ON pp.phone_number = pc.caller

WHERE
    ch.year = 2020 
	AND	ch.month = 7 
	AND	ch.day = 28 
	AND	ch.hour = 10  
	AND	ch.activity = 'exit'
 	AND at.atm_location = 'Fifer Street'
	AND at.transaction_type = 'withdraw'
	AND fl.year = 2020
	AND fl.month = 7
	AND fl.day = 29
	AND pc.duration < 60
	AND pc.day = 28
	AND ch.minute > 15 AND ch.minute < 25
	
  

-- 	ps.flight_id = 36;
-- 	pc.duration <=60;