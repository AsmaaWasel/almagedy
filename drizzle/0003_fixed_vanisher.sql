ALTER TABLE "packages" ALTER COLUMN "badge" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "packages" ALTER COLUMN "button" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "packages" ALTER COLUMN "features" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "packages" ADD COLUMN "title" text NOT NULL;--> statement-breakpoint
ALTER TABLE "packages" ADD COLUMN "subtitle" text;--> statement-breakpoint
ALTER TABLE "packages" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "packages" DROP COLUMN "description";