

#Zip Server
echo "Zip Frontend And Server Folder"
zip -r ./index.zip ./frontend/*
ls -l | grep index.zip

#read -p "Any Key to Continue..." var
read -p "choose target [ product(p) / testing(t) / cancel(c) ] ..." choice

if [ "$choice" = "p" ]
    then
    echo "your choice is product"
    echo "upload to remote server"
    scp -i ~/.ssh/zbeans.pem ./Server_visme.zip ec2-user@amazon_server:~/Documents/
    echo "run deploy_mx_product.sh in amazon Server"
    ssh -i ~/.ssh/zbeans.pem ec2-user@amazon_server "cd Documents && ls -la && sh ./deploy_visme_product.sh"
elif [ "$choice" = "t" ]
    then
    echo "your choice is testing"
    echo "upload to remote server"
    scp -i ~/.ssh/zbeans.pem ./Server_visme.zip ec2-user@amazon_server:~/Documents/
    echo "run deploy_mx_testing.sh in amazon Server"
    ssh -i ~/.ssh/zbeans.pem ec2-user@amazon_server "cd Documents && ls -la && sh ./deploy_visme_test.sh"
else
    echo "your choice is cancel"
fi



#remove zip file
echo "remove zip file"
rm ./Server_visme.zip
