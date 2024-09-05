# Variables
$resourceGroupName = "yourResourceGroupName"
$location = "yourLocation"
$storageAccountName = "yourStorageAccountName"
$accountTier = "Standard"
$accountReplicationType = "LRS"

# Create Resource Group
az group create --name $resourceGroupName --location $location

# Create Storage Account
az storage account create `
    --name $storageAccountName `
    --resource-group $resourceGroupName `
    --location $location `
    --sku $accountTier `
    --kind StorageV2 `
    --access-tier Hot `
    --https-only true `
    --enable-hierarchical-namespace false `
    --enable-large-file-share false `
    --min-tls-version TLS1_2 `
    --allow-blob-public-access false `
    --allow-shared-key-access true `
    --default-action Allow `
    --bypass AzureServices `
    --network-rule-set Default `
    --tags "environment=production" `
    --output json