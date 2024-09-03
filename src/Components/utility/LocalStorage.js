const getStoredJobApplication = () =>{
    const StoredJobApplication = localStorage.getItem('job-application');
    if(StoredJobApplication){

        return JSON.parse(StoredJobApplication);
    }
    return [];
        
}


const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(Id => Id === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
    }


}
export { getStoredJobApplication, saveJobApplication}