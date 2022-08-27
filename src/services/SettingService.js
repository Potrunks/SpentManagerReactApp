class SettingService {
    
    API_URL_BASE() {
        //return "http://localhost:8080/spentmanager";
        return "https://spent-manager-spring-app.herokuapp.com/spentmanager";
    }

}

export default new SettingService();