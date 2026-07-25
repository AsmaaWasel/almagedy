ALTER TABLE "packages" ADD COLUMN "packageType" text NOT NULL;--> statement-breakpoint
ALTER TABLE "packages" ADD COLUMN "badge" text NOT NULL;--> statement-breakpoint
ALTER TABLE "packages" ADD COLUMN "button" text NOT NULL;--> statement-breakpoint
ALTER TABLE "packages" ADD COLUMN "features" json DEFAULT '[]'::json NOT NULL;