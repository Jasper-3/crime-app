SELECT *
FROM
crime_scene_reports
WHERE 
year=2020 AND
month=7 AND
day=28 AND
description LIKE '%theft%';
