use std::fs::File;
use std::path::Path;
use sqlx::sqlite::SqlitePoolOptions;

pub struct Database{
    pool: sqlx::SqlitePool,
}

impl Database {
    pub async fn new(db_path: String) -> Database {
        let sql_path: String = format!("{}/app.sqlite",db_path.clone());
        if!Path::new(&sql_path).exists() {
            File::create(sql_path.clone())
                .expect("Failed to create app.sqlite");
        }
        let pool = SqlitePoolOptions::new()
            .max_connections(4)
            .connect(&format!("sqlite://{}", sql_path))
            .await.expect("Failed to connect to database");
        Self {
            pool
        }
    }
}