module.exports = {

    ARTICLES: {

        "GLOBAL_TOP_RATED": `MATCH (article:Article) WHERE
    article.rating_population > 50 WITH article
    MATCH (article)-[:IS_PUBLISHED_BY]->(publication),
    (article)-[:IS_AUTHORED_BY]->(author),
    (article)-[:PUBLISHED_ON_DAY]->(day),
    (article)-[:PUBLISHED_IN_MONTH]->(month),
    (article)-[:PUBLISHED_IN_YEAR]->(year)
    RETURN article.articleid as id,
    publication.name as publication,
    year.year as year,month.month as month,
    day.day as day,article.title as title,
    author.name as author,
    article.avg_rating as avg_rating,
    article.rating_population as rating_population
    ORDER BY avg_rating DESC LIMIT 10
    `,
        "GLOBAL_MOST_POPULAR": `MATCH (article:Article)-[:IS_PUBLISHED_BY]->(publication),
    (article)-[:IS_AUTHORED_BY]->(author),
    (article)-[:PUBLISHED_ON_DAY]->(day),
    (article)-[:PUBLISHED_IN_MONTH]->(month),
    (article)-[:PUBLISHED_IN_YEAR]->(year)
    RETURN article.articleid as id,
    publication.name as publication,
    year.year as year,month.month as month,
    day.day as day,article.title as title,
    author.name as author,
    article.avg_rating as avg_rating,
    article.rating_population as rating_population
    ORDER BY rating_population DESC LIMIT 10
    `,
        "PERSONALIZED_MOST_POPULAR": `MATCH (cat1:Category)<-[:IS_OF_CATEGORY]-(article:Article)
    -[:RATED_BY]->(user:User{userid:@{v1}}),
    (cat1)-[r:IS_SIMILAR_TO]->(cat2:Category)
    WHERE abs(r.wup_similarity-r.path_similarity) < 0.2
    WITH user,collect(DISTINCT cat1)+collect(DISTINCT cat2)
    as sim_cats UNWIND sim_cats as sim_cat 
    WITH user,collect(DISTINCT sim_cat) as unique_sim_cats
    UNWIND unique_sim_cats as cat
    MATCH (cat)<-[:IS_OF_CATEGORY]-(otherarticle:Article)
    WHERE NOT (otherarticle)-[:RATED_BY]->(user)
    WITH otherarticle MATCH
    (otherarticle)-[:IS_PUBLISHED_BY]->(publication),
    (otherarticle)-[:IS_AUTHORED_BY]->(author),
    (otherarticle)-[:PUBLISHED_ON_DAY]->(day),
    (otherarticle)-[:PUBLISHED_IN_MONTH]->(month),
    (otherarticle)-[:PUBLISHED_IN_YEAR]->(year)
    RETURN DISTINCT otherarticle.articleid as id,
    publication.name as publication,
    year.year as year,month.month as month,
    day.day as day,otherarticle.title as title,
    author.name as author,
    otherarticle.avg_rating as avg_rating,
    otherarticle.rating_population as rating_population
    ORDER BY rating_population DESC LIMIT 10
    `,
        "PERSONALIZED_TOP_RATED": `MATCH (cat1:Category)<-[:IS_OF_CATEGORY]-(article:Article)
    -[:RATED_BY]->(user:User{userid:@{v1}}),
    (cat1)-[r:IS_SIMILAR_TO]->(cat2:Category)
    WHERE abs(r.wup_similarity-r.path_similarity) < 0.2
    WITH user,collect(DISTINCT cat1)+collect(DISTINCT cat2)
    as sim_cats UNWIND sim_cats as sim_cat 
    WITH user,collect(DISTINCT sim_cat) as unique_sim_cats
    UNWIND unique_sim_cats as cat
    MATCH (cat)<-[:IS_OF_CATEGORY]-(otherarticle:Article)
    WHERE NOT (otherarticle)-[:RATED_BY]->(user)
    AND otherarticle.rating_population > 50
    WITH otherarticle MATCH
    (otherarticle)-[:IS_PUBLISHED_BY]->(publication),
    (otherarticle)-[:IS_AUTHORED_BY]->(author),
    (otherarticle)-[:PUBLISHED_ON_DAY]->(day),
    (otherarticle)-[:PUBLISHED_IN_MONTH]->(month),
    (otherarticle)-[:PUBLISHED_IN_YEAR]->(year)
    RETURN DISTINCT otherarticle.articleid as id,
    publication.name as publication,
    year.year as year,month.month as month,
    day.day as day,otherarticle.title as title,
    author.name as author,
    otherarticle.avg_rating as avg_rating,
    otherarticle.rating_population as rating_population
    ORDER BY avg_rating DESC LIMIT 10`


    }


};