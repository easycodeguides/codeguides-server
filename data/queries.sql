
-- SELECT FILES
SET @ID_COMMIT=2;

SELECT f.id as file_id,f.filename,f.created_in_commit created,f.last_changed_in_commit changed,f.deleted_in_commit deleted
        ,c.id_commit,c.path,c.content,c.id as change_id
FROM files f INNER JOIN changes c ON c.id_file=f.id
WHERE f.created_in_commit<=@ID_COMMIT AND c.id=(SELECT max(id) from changes where id_file=f.id)
        AND NOT(f.deleted_in_commit<@ID_COMMIT AND f.deleted_in_commit>0)
ORDER BY id_file DESC ;



