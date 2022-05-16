
TRUNCATE TABLE "Bicycles", "Users", "Reviews" RESTART IDENTITY;
INSERT INTO "Users" ("Id", "FullName", "Email", "HashedPassword") VALUES (1, 'John Doe', 'sample1@gmail.com', 'Password1');

INSERT INTO "Bicycles" ("UserId", "Title", "Description", "Frame", "Fork", "Saddle", "Handlebar", "BottomBracket", "ChainRing", "RearCog", "Crank", "WheelSet", "Pedals", "Other") VALUES (1, 'Bicycle 1', 'Description 1', 'Frame 1', 'Fork 1', 'Saddle 1', 'Handlebar 1', 'BottomBracket 1', 'ChainRing 1', 'RearCog 1', 'Crank 1', 'WheelSet 1', 'Pedals 1', 'Other 1');


TRUNCATE TABLE "Reviews" RESTART IDENTITY;
INSERT INTO "Reviews" ("UserId", "BicycleId", "CreatedAt", "Summary", "Body", "Stars") VALUES (1, 1, '2020-01-01 14:23:55', 'Clean', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi impedit quisquam sit, saepe enim placeat a vero voluptas asperiores atque laudantium in, nobis sunt blanditiis dignissimos. Deleniti, esse optio!', 4);

-- INSERT INTO "Users" ("Id", "FullName", "Email", "HashedPassword") VALUES (1, 'John Doe', 'sample1@gmail.com', 'Password1');