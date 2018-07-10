#Zip Server                                                                                                
echo "zipWebSite"
#for the firest time                                                                                       
#zip -r ./Server_mx_game.zip ./* --exclude=*runtime* -x *log_* .* uploadWebGame.sh                         
zip -r ./norchain.zip ./website/* --exclude=*runtime* --exclude=*frameworks* -x *log_* .* uploa*.sh

#only publish folder                                                                                       
#cd ./publish/html5/                                                                                       


zip -r ./norchain.zip ./* -X *.DS_Store
#mv ./Server_mx_game.zip ../../                                                                            
#cd ../../                                                                                                 

ls -l | grep norchain.zip

scp  ./norchain.zip ec2@120.27.8.121:~/Documents/
echo "run deploy_norchain.sh in amazon Server"
ssh  -t ec2@120.27.8.121 "cd Documents && ls -la && sh ./deploy_norchain.sh"



#remove zip file                                                                                           
echo "remove zip file"
rm ./norchain.zip