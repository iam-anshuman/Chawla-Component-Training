import mongoose,{Schema,model,Document,Model} from "mongoose";

export interface UserDocument extends Document{
    name: string;
    email: string;
    password: string;
}

interface UserModel extends Model<UserDocument>{
    myStatic: () => number;
}

const userSchema = new Schema<UserDocument,UserModel>({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

userSchema.static('myStatic', function(){
    return 512;
})

const User = model<UserDocument>("User",userSchema);
export default User;