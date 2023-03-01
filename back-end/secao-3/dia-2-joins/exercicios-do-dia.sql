USE pixar;
-- 1. Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.

SELECT
	m.title,
    box.international_sales,
    box.domestic_sales
FROM
	movies AS m
INNER JOIN
	box_office AS box ON box.movie_id = m.id;
    
-- 2.Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT
	m.title,
    box.international_sales
FROM
	movies AS m
INNER JOIN
	box_office AS box ON box.movie_id = m.id
WHERE
	box.international_sales > box.domestic_sales;
    
-- 3. Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT
	m.title,
    box.rating
FROM
	movies AS m
INNER JOIN
	box_office AS box ON box.movie_id = m.id
ORDER BY box.rating DESC;

-- 4. Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
	t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM theater AS t
LEFT JOIN 
	movies AS m ON t.id = m.theater_id
ORDER BY t.name;

-- 5. Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT
	t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM theater AS t
RIGHT JOIN 
	movies AS m ON t.id = m.theater_id
ORDER BY t.name;

-- 6.  Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.

SELECT
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM movies AS m
INNER JOIN 
	movies AS t ON t.id = m.theater_id
INNER JOIN
	box_office b ON b.movie_id = m.id
WHERE
	b.rating > 8
    AND m.theater_id IS NOT NULL;
