// data 
import VARIABLES from "@_data/variables.json";

const DBInfo = VARIABLES.IN_DB;
let db: IDBDatabase | null = null;

// Local DB Open
export function openDatabase(
    storeName: string,
    version: number = 1
): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error("IndexedDB is only available to clients."));
      return;
    }

    const request = indexedDB.open(DBInfo.DB_NAME, version);

    request.onerror = (event) => {
      console.error("*** IndexedDB Error ***", event);
      reject(event);
    };

    request.onsuccess = (event) => {
      console.info("*** IndexedDB Success ***");
      db = (event.target as IDBOpenDBRequest).result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      console.info("*** IndexedDB Onupgradeneeded ***");
      const db = (event.target as IDBOpenDBRequest).result;
      
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id' });
      }
    };
  });
}

// Get Local DB Instance
export function getDbInstance(storeName: string): Promise<IDBDatabase> {
  if (db) {
    return Promise.resolve(db);
  } else {
    return openDatabase(storeName);
  }
}

// Add/Update Store Item 
export function saveItem(storeName: string, item: { id: string; [key: string]: any }): Promise<void> {
  return getDbInstance(storeName).then((db) => {
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([storeName], "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.put(item);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = (event) => {
        console.error("Error adding data:", event);
        reject(event);
      };
    });
  });
}

// Get Store Item
export function getItem(storeName: string, id: string): Promise<any> {
  return getDbInstance(storeName).then((db) => {
    return new Promise<void>((resolve, reject) => {
      const transaction = db.transaction([storeName], "readonly");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.get(id);

      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };

      request.onerror = (event) => {
        console.error("Error getting data:", event);
        reject(event);
      };
    });
  });
}