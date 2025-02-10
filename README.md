# TeamMaker
App written in React Native and Python, which can split up people in balanced teams

# Good-To-Knows

## Setup & Installtion

Make sure you have the latest version of Python installed. TODO: specific python version needed?

### Clone repo
```bash
git clone <repo-url>
```

### Create venv
```bash
cd TeamMaker
python m venv venv
```

### Activating venv
```bash
source venv/bin/activate
```
### Or on windows
```bash
.\venv\Scripts\activate
```

### Freeze needed requirements
```bash
pip freeze > requirements.txt
```

### Install requirements
```bash
pip install -r requirements.txt
```

## Running The App

```bash
python main.py
```

## Viewing The App

Go to `http://127.0.0.1:5000`


### Deactivating venv
```bash
source deactivate
```

### Or on windows
```bash
deactivate
```

### Run this in the folder where main.py is located, to activate flask API for other devices in network
```bash
flask --app main run --host=0.0.0.0
```

### Then start the expo application by doing this in the folder where app.json is located (i think there is currently also a README.md file)
```bash
npx expo start
```
