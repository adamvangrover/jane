use log::{info, error};
use std::env;

mod sandbox;
mod policy;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    env_logger::init();
    info!("Starting Jane Iron Core...");

    // Initialize policy engine
    let policy_engine = policy::PolicyEngine::new("TOOLS.md");
    if let Err(e) = policy_engine.validate_environment() {
        error!("Policy validation failed: {}", e);
        return Err(e);
    }

    // Spin up the sandbox
    let sandbox_manager = sandbox::SandboxManager::new();
    sandbox_manager.start_session().await?;

    info!("Iron Core execution completed successfully.");
    Ok(())
}
