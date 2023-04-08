SELECT DISTINCT M1.ItemID, M1.Description, M1.QuantityOnHand

FROM
	(
	SELECT ItemID, Description, QuantityOnHand
	FROM PET..Merchandise  
	WHERE QuantityOnHand > 100   
	) M1
WHERE M1.ItemID NOT IN 	
	(
	SELECT O.ItemID
	FROM PET..MerchandiseOrder MO INNER JOIN PET..OrderItem O ON MO.PONumber=O.PONumber
	WHERE YEAR(MO.OrderDate) = 2004
	) 

