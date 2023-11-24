-- 코드를 입력하세요
SELECT B.USER_ID, B.NICKNAME, SUM(A.PRICE) AS TOTAL_SALES
FROM USED_GOODS_BOARD A
JOIN USED_GOODS_USER B 
ON A.WRITER_ID = B.USER_ID
WHERE A.STATUS = 'DONE' #완료된 중고 거래
GROUP BY B.USER_ID #각 회원별로 묶어줌
HAVING TOTAL_SALES >= 700000 #총금액이 70만 원 이상인 사람
ORDER BY TOTAL_SALES # 총거래금액을 기준으로 오름차순 정렬