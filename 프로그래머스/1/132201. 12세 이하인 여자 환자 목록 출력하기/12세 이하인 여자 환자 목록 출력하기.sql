-- 코드를 입력하세요
SELECT PT_NAME, PT_NO, GEND_CD, AGE, IFNULL(TLNO,'NONE') as TLNO
FROM PATIENT 
-- 2가지 이상의 조건의 만족해야하면 AND 2가지 중 하나면 OR
WHERE AGE <= 12 AND GEND_CD ='W'
-- 내림차순 이기 때문에 DESC, 원래는 ORDER BY (조건) ASC 이렇게인데 ASC가 생략되어 있는 것임
ORDER BY AGE DESC, PT_NAME ASC