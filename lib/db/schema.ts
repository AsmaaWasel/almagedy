import {
  pgTable,
  text,
  timestamp,
  boolean,
  serial,
  integer,
  decimal,
  json,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// --- Better Auth required tables -------------------------------------------
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  image: text("image"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

// --- App tables - Almagedy Management System ----------------------------

// Buses table
export const buses = pgTable("buses", {
  id: serial("id").primaryKey(),

  userId: text("userId").notNull(),

  title: text("title").notNull(),

  description: text("description"),

  busType: text("busType").notNull(), // vip | economy

  createdAt: timestamp("createdAt").defaultNow().notNull(),

  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
//buses images
export const busImages = pgTable("busImages", {
  id: serial("id").primaryKey(),

  busId: integer("busId")
    .references(() => buses.id, {
      onDelete: "cascade",
    })
    .notNull(),

  imageUrl: text("imageUrl").notNull(),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export const busesRelations = relations(buses, ({ many }) => ({
  images: many(busImages),
}));

export const busImagesRelations = relations(busImages, ({ one }) => ({
  bus: one(buses, {
    fields: [busImages.busId],
    references: [buses.id],
  }),
}));
// Trips/Packages table
export const trips = pgTable("trips", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  name: text("title").notNull(),
  description: text("description"),
  destination: text("destination").notNull(),
  startDate: timestamp("startDate").notNull(),
  endDate: timestamp("endDate").notNull(),
  duration: integer("duration").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  capacity: integer("capacity").notNull(),
  currentBookings: integer("currentBookings").notNull().default(0),
  busId: integer("busId"),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Customers table
export const customers = pgTable("customers", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  name: text("name").notNull(),
  lastName: text("lastName").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  nationalId: text("nationalId"),
  passport: text("passport"),
  address: text("address"),
  city: text("city"),
  country: text("country"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Bookings table
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  customerId: integer("customerId").notNull(),
  tripId: integer("tripId").notNull(),
  bookingDate: timestamp("bookingDate").notNull().defaultNow(),
  status: text("status").notNull().default("confirmed"), // 'confirmed', 'pending', 'cancelled'
  numberOfPassengers: integer("numberOfPassengers").notNull(),
  totalPrice: decimal("totalPrice", { precision: 10, scale: 2 }).notNull(),
  notes: text("notes"),
  specialRequests: text("specialRequests"),
  paymentStatus: text("paymentStatus").notNull().default("pending"), // 'pending', 'paid', 'partial'
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

// Payments table
export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  bookingId: integer("bookingId").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  paymentMethod: text("paymentMethod").notNull(), // 'cash', 'card', 'bank_transfer'
  paymentDate: timestamp("paymentDate").notNull().defaultNow(),
  referenceNumber: text("referenceNumber"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
});

export const hotels = pgTable("hotels", {
  id: serial("id").primaryKey(),

  userId: text("userId").notNull(),

  title: text("title").notNull(),

  description: text("description"),

  hotelType: text("hotelType").notNull(), // 3 نجوم - 4 نجوم - 5 نجوم

  packageType: text("packageType").notNull(), // VIP - اقتصادي

  createdAt: timestamp("createdAt").defaultNow().notNull(),

  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export const hotelImages = pgTable("hotelImages", {
  id: serial("id").primaryKey(),

  hotelId: integer("hotelId")
    .references(() => hotels.id, {
      onDelete: "cascade",
    })
    .notNull(),

  imageUrl: text("imageUrl").notNull(),

  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
export const hotelsRelations = relations(hotels, ({ many }) => ({
  images: many(hotelImages),
}));

export const hotelImagesRelations = relations(hotelImages, ({ one }) => ({
  hotel: one(hotels, {
    fields: [hotelImages.hotelId],
    references: [hotels.id],
  }),
}));

export const packages = pgTable("packages", {
  id: serial("id").primaryKey(),

  userId: text("userId").notNull(),

  name: text("name").notNull(),

  description: text("description"),

  createdAt: timestamp("createdAt").defaultNow().notNull(),

  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});
