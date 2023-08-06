using System.String;
using System.string;
using System.Text.StringBuilder;
using System.Data.Common.DbCommand;
using System.Data;
using System.Data.SqlClient;

namespace Sqli {
  public class Sqli {
    public void sqli1(string sqli) {
      using(SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI;")) {
        connection.Open();
        SqlCommand command = connection.CreateCommand();
        // ruleid: ex22_dbg_sqli
        command.CommandText = string.Format("SELECT * FROM Customers WHERE CustomerId = '{0}'", sqli);
        command.ExecuteNonQuery();

      }
    }

    public void sqli2(string sqli) {
      using(SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI;")) {
        connection.Open();
        SqlCommand command = connection.CreateCommand();

        // Sanitize the input for SQL query
        sqli = sqli.Replace("'", "''");

        // ok: ex22_dbg_sqli
        command.CommandText = String.Format("SELECT * FROM Customers WHERE CustomerId = '{0}'", sqli);
        command.CommandTimeout = 15;
        command.CommandType = CommandType.Text;
        command.ExecuteNonQuery();
        
      }
    }

    public void sqli4(string sqli) {
      using(SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI;")) {
        connection.Open();
        SqlCommand command = connection.CreateCommand();
        // ruleid: ex22_dbg_sqli
        command.CommandText = string.Concat(new string[] {
          "SELECT * FROM Customers WHERE CustomerId = '",
          sqli,
          "'"
        });
        command.CommandTimeout = 15;
        command.CommandType = CommandType.Text;
        command.ExecuteNonQuery();
      }
    }

    public void sqli4a() {
      using(SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI;")) {
        connection.Open();
        SqlCommand command = connection.CreateCommand();
        string sqli = GetNextID();
        // ruleid: ex22_dbg_sqli
        command.CommandText = string.Concat(new string[] {
          "SELECT * FROM Customers WHERE CustomerId = '",
          sqli,
          "'"
        });
        command.CommandTimeout = 15;
        command.CommandType = CommandType.Text;
        command.ExecuteNonQuery();
      }
    }

    public void sqli5(string sqli) {
      using(SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI;")) {
        connection.Open();
        SqlCommand command = connection.CreateCommand();

        // Sanitize the input for SQL query
        sqli = Utility.SQLSanitize(sqli);

        // ok: ex22_dbg_sqli
        command.CommandText = String.Concat(new string[] {
          "SELECT * FROM Customers WHERE CustomerId = '",
          sqli,
          "'"
        });
        command.CommandTimeout = 15;
        command.CommandType = CommandType.Text;
        command.ExecuteNonQuery();
      }
    }

    public void sqli6(string sqli, string more) {

      // Sanitize the input for SQL query
      sqli = sqli.Replace("'", "''");

      using(SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI;")) {
        connection.Open();
        SqlCommand command = connection.CreateCommand();

        // ok: ex22_dbg_sqli
        command.CommandText = string.Concat(new string[] {
          "SELECT * FROM Customers WHERE CustomerId = '",
          sqli,
          "'"
        });
        command.CommandTimeout = 15;
        command.CommandType = CommandType.Text;
        command.ExecuteNonQuery();
      }
    }

    public void sqli7(string sqli, string more) {
      using(SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI;")) {
        connection.Open();
        SqlCommand command = connection.CreateCommand();

        sqli = sqli + " " + more;


        // ok: ex22_dbg_sqli
        var strBlue = string.Concat(new string[] {
          "Some random text",
          sqli,
          "'"
        });

        // ruleid: ex22_dbg_sqli
        command.CommandText = string.Concat(new string[] {
          "SELECT * FROM Customers WHERE CustomerId = '",
          sqli,
          "'"
        });
        command.CommandTimeout = 15;
        command.CommandType = CommandType.Text;
        command.ExecuteNonQuery();
      }
    }

     public void sqli8(string sqli, string more) {
      using(SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI;")) {
        connection.Open();
        
        sqli = sqli + " " + more;

        // ruleid: ex22_dbg_sqli
        SqlCommand command = new SqlCommand(String.Format(new string[] {
          "SELECT * FROM Customers WHERE CustomerId = '",
          sqli,
          "'"
        }, connection);
        command.CommandTimeout = 15;
        command.CommandType = CommandType.Text;
        command.ExecuteNonQuery();
      }
    }

    public void sqli13() {
      using(SqlConnection connection = new SqlConnection("Data Source=(local);Initial Catalog=Northwind;Integrated Security=SSPI;")) {
        string sql = "SELECT * FROM Customers WHERE CustomerId = @CustomerId";
        // ok: ex22_dbg_sqli
        SqlCommand command = new SqlCommand(sql);
        command.Parameters.Add(new SqlParameter("@CustomerId", System.Data.SqlDbType.Int));
        command.Parameters["@CustomerId"].Value = 1;
        command.ExecuteNonQuery();
      }
    }

    
  }
}
