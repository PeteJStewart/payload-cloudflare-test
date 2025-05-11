import * as migration_20250509_094636_initial_migration from './20250509_094636_initial_migration';
import * as migration_20250511_083600 from './20250511_083600';

export const migrations = [
  {
    up: migration_20250509_094636_initial_migration.up,
    down: migration_20250509_094636_initial_migration.down,
    name: '20250509_094636_initial_migration',
  },
  {
    up: migration_20250511_083600.up,
    down: migration_20250511_083600.down,
    name: '20250511_083600'
  },
];
