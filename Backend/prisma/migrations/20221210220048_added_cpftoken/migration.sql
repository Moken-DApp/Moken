-- CreateTable
CREATE TABLE "cpf_tokens" (
    "tokenAddress" TEXT NOT NULL,
    "cpfOwner" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "cpf_tokens_tokenAddress_key" ON "cpf_tokens"("tokenAddress");

-- CreateIndex
CREATE UNIQUE INDEX "cpf_tokens_cpfOwner_key" ON "cpf_tokens"("cpfOwner");
