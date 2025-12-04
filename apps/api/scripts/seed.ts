import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import { UserSchema } from '../src/modules/auth/schemas/user.schema';
import { CategorieTypeSchema } from '../src/modules/categorie-types/schemas/categorie-type.schema';
import { CategoriesSchema } from '../src/modules/categories/schemas/categories.schema';
import { ExpensesSchema } from '../src/modules/expenses/schemas/expenses.schema';
import { IncomeSchema } from '../src/modules/incomes/schemas/incomes.schema';
import { PaymentMethodsSchema } from '../src/modules/payment-methods/schemas/payment-methods.schema';

const MONGO_URI = 'mongodb://admin:password@localhost:27017/claritycashdb?authSource=admin';

const User = mongoose.model('User', UserSchema);
const CategorieType = mongoose.model('CategorieType', CategorieTypeSchema);
const Categories = mongoose.model('Categories', CategoriesSchema);
const Expenses = mongoose.model('Expenses', ExpensesSchema);
const Income = mongoose.model('Income', IncomeSchema);
const PaymentMethods = mongoose.model('PaymentMethods', PaymentMethodsSchema);

async function seed() {
    console.log('Conectando a MongoDB...');
    await mongoose.connect(MONGO_URI);
    console.log('¡Conectado!');

    console.log('Limpiando datos existentes...');
    await User.deleteMany({});
    await CategorieType.deleteMany({});
    await Categories.deleteMany({});
    await Expenses.deleteMany({});
    await Income.deleteMany({});
    await PaymentMethods.deleteMany({});

    console.log('Sembrando Tipos de Categoría...');
    const incomeType = await CategorieType.create({ name: 'Ingreso' });
    const expenseType = await CategorieType.create({ name: 'Gasto' });

    console.log('Sembrando Métodos de Pago...');
    const cash = await PaymentMethods.create({ name: 'Efectivo', description: 'Dinero en efectivo' });
    const creditCard = await PaymentMethods.create({ name: 'Tarjeta de Crédito', description: 'Pago con tarjeta de crédito' });
    const debitCard = await PaymentMethods.create({ name: 'Tarjeta de Débito', description: 'Pago con tarjeta de débito' });

    console.log('Sembrando Categorías...');
    const salaryCategory = await Categories.create({
        name: 'Salario',
        description: 'Salario mensual',
        category_type: incomeType._id
    });
    const foodCategory = await Categories.create({
        name: 'Alimentación',
        description: 'Mercado y restaurantes',
        category_type: expenseType._id
    });
    const transportCategory = await Categories.create({
        name: 'Transporte',
        description: 'Transporte público y combustible',
        category_type: expenseType._id
    });

    console.log('Sembrando Usuarios...');
    const hashedPassword = await bcrypt.hash('password123', 10);
    const user = await User.create({
        name: 'Usuario de Prueba',
        email: 'test@example.com',
        password: hashedPassword,
    });

    console.log('Sembrando Gastos...');
    await Expenses.create({
        description: 'Compra de mercado',
        date: new Date(),
        amount: 50.00,
        category_id: foodCategory._id.toString(),
    });

    console.log('Sembrando Ingresos...');
    await Income.create({
        income_type: 'Salario',
        amount: 3000.00,
        date: new Date(),
        income_source: 'Empleador',
        description: 'Salario mensual',
        destination_account: 'Cuenta Bancaria',
        payment_method: 'Transferencia Bancaria',
        category: salaryCategory._id.toString(),
    });

    console.log('¡Sembrado completado!');
    await mongoose.disconnect();
}

seed().catch((err) => {
    console.error('Falló el sembrado:', err);
    mongoose.disconnect();
    process.exit(1);
});
