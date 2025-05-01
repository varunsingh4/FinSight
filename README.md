# FinSight

A Smart Visual Analytics Platform for Personal Finance Tracking, Bill Splitting &amp; Goal-Oriented Investment Planning

## Description

FinSight empowers users to seamlessly track expenses, split bills between friends or groups, and explore spending patterns through intuitive, interactive dashboards. By integrating machine learning with real-time financial asset data, the platform transforms raw user behavior into actionable investment strategies, enabling users to set financial goals and make informed, data-driven decisions to achieve them.

## Folder Structure

```bash
FinSight/
├──ml-engine
├──client
├──server
    ├── node_modules/                       # Installed npm packages
    ├── src/                                # Application source code
    │   ├── config/                         # Configuration files (e.g., database, environment) / MongoDB configuration
    │   │   ├── db.js
    │   │   └── appConfig.js
    │   ├── controllers(or)components/      # Application controllers (handling requests)
    │   │   └── userController.js
    │   ├── models/                         # Database models (e.g., Mongoose, Sequelize) / Mongoose schemas
    │   │   └── userModel.js
    │   ├── routes/                         # Route definitions / Express Routes definitions
    │   │   └── userRoutes.js
    │   ├── services/                       # Business logic/services
    │   │   └── userService.js
    │   ├── middleware/                     # Custom middleware
    │   │   └── authMiddleware.js
    │   ├── utils(or)helpers/               # Utility functions/helpers
    │   │   └── logger.js
    │   ├── app.js                          # Main application setup
    │   └── server.js                       # Entry point for starting the server
    ├── tests/                              # Unit and integration tests
    │   └── userController.test.js
    ├── public/                             # Static assets (images, stylesheets, etc.)
    ├── views/                              # Templates (if using a templating engine like EJS, Pug, HBS)
    ├── .env                                # Environment variables    
    ├── package.json                        # NPM dependencies and scripts
    └── package-lock.json                   # Dependency tree lock file 
├──.gitignore                               # Git ignore file
└── README.md                               # Project documentation
```
