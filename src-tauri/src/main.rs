// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod structs;
mod queries;

use dirs::data_dir;
use crate::structs::database_struct::Database;
const IDENTIFIER: &str = "com.job-tracker.janz";

#[tokio::main]
async fn main() {
    let mut app_path_buff = data_dir().expect("Failed to get data directory");
    app_path_buff.push(IDENTIFIER.to_string());
    let app_path = app_path_buff.display().to_string();
    let database = Database::new(app_path.clone());
    app_lib::run();
}
